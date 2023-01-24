import React, {
    useContext, useEffect
} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Pressable,
    StyleSheet
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';
import OrderedItemSection from '../components/OrderedItemSection';

import { globalStyles } from '../styles/global';
import {
    responsiveHeight,
    responsiveWidth,

} from "react-native-responsive-dimensions";
const OrdersScreen = () => {
    const { orderedItems, clearOrderedItems } = useContext(OrderItemsContext);
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const response = db.collection('Orders');
        const data = await response.get();
        data.docs.forEach(item => {
            setBlogs([...blogs, item.data()])
        })
    }
    useEffect(() => {
        fetchBlogs();
    }, [])
    const clearList = () => {
        clearOrderedItems();
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={globalStyles.screenHeader}>
                YOUR ORDER
            </Text>
            {
                blogs && blogs.map(blog => {
                    return (
                        <div className="blog-container">
                            <h4>{blog.name}</h4>
                            <p>{blog.price}</p>
                        </div>
                    )
                })
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        backgroundColor: 'black',
        opacity: 0.6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 20,
        height: responsiveHeight(100),
        width: responsiveWidth(85),
        alignItems: 'center',
        paddingTop: 30,
    },
    totalTxt: {
        marginTop: 30,
        marginBottom: 40,
        color: 'white',
        fontFamily: 'fugaz-one',
        fontSize: 25,
    },
})

export default OrdersScreen;
