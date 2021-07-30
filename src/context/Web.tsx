/* eslint-disable prettier/prettier */
import React, {createContext, ReactNode} from 'react';
import { useState } from 'react';
import {
    useSharedValue,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { SplashScreen } from '../pages/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import {Products} from '../config/products';

interface PropsScrollY{
    value: any;
}

interface PropsContext{
    handleSaveProfileAccount: (data: PropsProfile) => any;
    scrollHandler: (event: any) => void;
    handleRemoveProducts: (id: string) => void;
    handleSearchProducts: (name: string) => void;
    handleSaveProducts: (data: PropsProducts) => void;
    handleOrderDown: () => void;
    handleOrderUp: () => void;
    handleExitAccount: () => void;
    handleAddQuantity: (index: number) => void;
    handleRemoveQuantity: (index: number) => void;
    productsCart: PropsProducts[];
    scrollY: PropsScrollY;
    profile: PropsProfile;
    loading: boolean;
    searchProducts: PropsProducts[];
    products: PropsProducts[];
    cartValue: PropsCartValue;
    orderActive: PropsActivedOrder
}

interface PropsProvider{
    children: ReactNode;
}

interface PropsProfile {
    name: string;
    email: string;
}

interface PropsActivedOrder{
    up: boolean;
    down: boolean;
}

interface PropsProducts{
    id: string;
    name: string;
    price: number;
    score: number;
    image: any;
    quantity?: number;
}

interface PropsCartValue{
    total: any;
    shipping: number;
}

export const WebContext = createContext({} as PropsContext);

export const WebProvider = ({children}: PropsProvider) => {
    const [loadingScreenSplash, setLoadingcreenSplash] = useState(true);
    const [loading, setLoading] = useState(false);
    const [productsCart, setProductsCart] = useState<PropsProducts[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [searchProducts, setSearchProducts] = useState<any[]>([]);
    const [changeStatus, setChangeStatus] = useState<number>(0);
    const [changeStatusAccount, setChangeStatusAccount] = useState<number>(0);
    const [cartValue, setCartValue] = useState<PropsCartValue>({
        total: 0,
        shipping: 0,
    });
    const [orderActive, setOrderActive] = useState<PropsActivedOrder>({
        down: false,
        up: false,
    });

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event: any) => {
        scrollY.value = event.contentOffset.y;
    });
    const [profile, setProfile] = useState<PropsProfile>({
        name: '',
        email: '',
    });

    useEffect(() => {
        const func = async() => {
            const response: any = await AsyncStorage.getItem('profile');
            const profile = JSON.parse(response);
            if (profile.name == ''){
                const data = {
                    name: '',
                    email: '',
                };
                AsyncStorage.setItem('profile', JSON.stringify(data));
            }

            if (profile){
                setProfile({
                    name: profile.name,
                    email: profile.email,
                });
            }
        };
        func();
    }, [changeStatusAccount]);

    //Assim que entrar jogar os dados para uma variavel
    useEffect(() => {
        setProducts(Products);
    }, []);

    //Buscar os produtos do carrinho em tempo real
    useEffect(() => {
        const func = async() => {
            const reponse: any = await AsyncStorage.getItem('products');
            // eslint-disable-next-line no-shadow
            const products = JSON.parse(reponse) ? [...JSON.parse(reponse)] : [];
            setProductsCart(products);
        };
        func();
    }, [changeStatus]);

    //Buscar o valor total e do frete em tempo real
    useEffect(() => {
        const func = async() => {
            const response: any = await AsyncStorage.getItem('products');
            const products: PropsProducts[] = JSON.parse(response);
            const responseCart: any = await AsyncStorage.getItem('cart_values');
            const cartValues = JSON.parse(responseCart);
            console.log(responseCart);
            if (products.length === 0){
                const cart = {
                    total: 0,
                    shipping: 0,
                };
                AsyncStorage.setItem('cart_values', JSON.stringify(cart));
                setCartValue({...cart});
            } else {
                setCartValue({...cartValues});
            }
        };
        func();
    }, [changeStatus]);

    setTimeout(() => {
        setLoadingcreenSplash(false);
    }, 3 * 1000);

    if (loadingScreenSplash){
        return (
            <SplashScreen />
        );
    }

    //Atualizar valor total e do frete
    const setCartValuesAdd = async() => {
        const response: any = await AsyncStorage.getItem('products');
        const products: PropsProducts[] = JSON.parse(response);
        // const responseCart: any = await AsyncStorage.getItem('cart_values');
        // const cartValues = JSON.parse(responseCart);
        console.log(products[1]);
        let total = 0;
        let shipping = 0;
        for (let i = 0; i < products.length; i++) {
            total = total + Number(products[i].price) * Number(products[i].quantity);
            shipping = total >= 250 ? 0 : Number(products.length) * 10;
        }
        const data = {
            total: total.toFixed(2),
            shipping: shipping.toFixed(2),
        };
        AsyncStorage.setItem('cart_values', JSON.stringify(data));
        setChangeStatus(prevState => prevState + 1);
    };

    //Atualizar valor total e do frete
    const setCartValuesRemove = async(item?: PropsProducts) => {
        const response: any = await AsyncStorage.getItem('products');
        const products: PropsProducts[] = JSON.parse(response);
        const responseCart: any = await AsyncStorage.getItem('cart_values');
        const cartValues = JSON.parse(responseCart);

        console.log(item);

        if (products.length === 0){
            const cart = {
                total: 0,
                shipping: 0,
            };
            setLoading(false);
            setChangeStatus(prevState => prevState + 1);
            return AsyncStorage.setItem('cart_values', JSON.stringify(cart));
        }

        const totalProductValue = Number(Number(item?.quantity) * Number(item?.price));
        console.log('156: ', totalProductValue);
        const cart = {
            total: (Number(cartValues?.total) - totalProductValue).toFixed(2),
            shipping: (Number(cartValues.total) - Number(item?.price) > 250 ? 0 : products.length * 10).toFixed(2),
        };

        setChangeStatus(prevState => prevState + 1);
        AsyncStorage.setItem('cart_values', JSON.stringify(cart));
    };

    //Adicionar um produto do carrinho
    const handleAddValueCart = async() => {
        setLoading(true);
        setCartValuesAdd();
        setChangeStatus(prevState => prevState + 1);
        setLoading(false);
    };

    //Remover um produto do carrinho
    const handleRemoveValueCart = async(item: PropsProducts) => {
        setLoading(true);

        setCartValuesRemove(item);
        setChangeStatus(prevState => prevState + 1);
        setLoading(false);
    };

    //Aumentar quantitade de produtos do carrinho
    const handleAddQuantity = async(index: number) => {
        const response: any = await AsyncStorage.getItem('products');
        const products: PropsProducts[] = JSON.parse(response);

        products[index].quantity = Number(products[index].quantity) + 1;

        AsyncStorage.setItem('products', JSON.stringify(products));
        setCartValuesAdd();
        setChangeStatus(prevState => prevState + 1);
    };

    //Reduzir quantitade de produtos do carrinho
    const handleRemoveQuantity = async(index: number) => {
        const response: any = await AsyncStorage.getItem('products');
        const products: PropsProducts[] = JSON.parse(response);

        products[index].quantity = Number(products[index].quantity) <= 1 ? 1 : Number(products[index].quantity) - 1;
        AsyncStorage.setItem('products', JSON.stringify(products));
        setChangeStatus(prevState => prevState + 1);
        setCartValuesAdd();
    };

    //Busca bem simples
    const handleSearchProducts = async(data: string) => {
        setLoading(true);
        const productsFiltered = Products.filter((item: PropsProducts) => {
            const name = item.name.toLowerCase();
            const search = data.toLowerCase();

            return name === search;
        });

        setSearchProducts(productsFiltered);
        setLoading(false);
    };

    //Criação de perfil
    const handleSaveProfileAccount = async(data: PropsProfile) => {
        setLoading(true);
        if (data.name === '' || data.email === ''){
            setLoading(false);
        }
        AsyncStorage.setItem('profile', JSON.stringify(data));
        setChangeStatusAccount(prevState => prevState + 1);
        setLoading(false);
    };

    //Sair da conta atual
    const handleExitAccount = async() => {
        setLoading(true);
        const data = {
            name: '',
            email: '',
        };
        AsyncStorage.setItem('profile', JSON.stringify(data));
        setChangeStatusAccount(prevState => prevState + 1);
        setLoading(false);
    };

    //Salvar produtos no carrinho
    const handleSaveProducts = async(data: PropsProducts) => {
        setLoading(true);
        const response: any = await AsyncStorage.getItem('products');
        const products = JSON.parse(response) ? [...JSON.parse(response)] : [];

        const find = await products.find((item: PropsProducts) => {
            return item.id === data.id;
        });

        if (find){
            setLoading(false);
            return false;
        }

        if (products.length === 0){
            const d = [
                {...data, quantity: 1},
            ];
            AsyncStorage.setItem('products', JSON.stringify(d));
            handleAddValueCart();
            setChangeStatus(prevState => prevState + 1);
            setLoading(false);
            return true;
        } else {
            products.push({...data, quantity: 1});
            AsyncStorage.setItem('products', JSON.stringify(products));
            handleAddValueCart();
            setChangeStatus(prevState => prevState + 1);
            setLoading(false);
            return true;
        }
    };

    //Tirar produtos do carrinho
    const handleRemoveProducts = async(id: string) => {
        setLoading(true);
        const response: any = await AsyncStorage.getItem('products');
        const products = JSON.parse(response) ? [...JSON.parse(response)] : [];

        const find = products.filter((item: PropsProducts) => {
            return item.id !== id;
        });

        const findDeleted = products.find((item: PropsProducts) => {
            return item.id === id;
        });

        AsyncStorage.setItem('products', JSON.stringify(find));
        setChangeStatus(prevState => prevState + 1);
        handleRemoveValueCart(findDeleted);
        setLoading(false);
    };

    //Ordenar por menor preço
    const handleOrderDown = () => {
        setLoading(true);
        const productsSorted = products.sort(function(a, b){
            return a.price - b.price;
        });
        setOrderActive({up: false, down: true});
        setProducts([...productsSorted]);
        setLoading(false);
    };

    //Ordenar por maior preço
    const handleOrderUp = () => {
        setLoading(true);
        const productsSorted = products.sort(function(a, b){
            return b.price - a.price;
        });
        setOrderActive({down: false, up: true});
        setProducts([...productsSorted]);
        setLoading(false);
    };

    return (
        <WebContext.Provider value={{
            handleSaveProfileAccount,
            scrollHandler,
            handleSaveProducts,
            handleRemoveProducts,
            handleSearchProducts,
            handleOrderDown,
            handleOrderUp,
            handleExitAccount,
            handleAddQuantity,
            handleRemoveQuantity,
            productsCart,
            searchProducts,
            scrollY,
            orderActive,
            profile,
            loading,
            products,
            cartValue,
        }}>
            {children}
        </WebContext.Provider>
    );
};
