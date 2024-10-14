import series1 from '../assets/series1.png'
import series2 from '../assets/series2.png'
import series3 from '../assets/series3.png'
import series4 from '../assets/series4.png'
import series5 from '../assets/series5.png'
import series6 from '../assets/series6.png'
import offer1 from '../assets/offer1.png'
import offer2 from '../assets/offer2.png'
import offer3 from '../assets/offer3.png'
import offer4 from '../assets/offer4.png'


export const productdata = [
    {
        src : series1, alt: "series1 image",
        title : "Naruto"
    },
    {
        src : series2, alt: "series2 image",
        title : "One Piece"
    },
    {
        src : series3, alt: "series3 image",
        title : "Demon slayer"
    },
    {
        src : series4, alt: "series4 image",
        title : "Jujutsu Kaisen"
    },
    {
        src : series6, alt: "series6 image",
        title : "Attack On Titan"
    },
    {
        src : series5, alt: "series5 image",
        title : "Haikyuu"
    },

] 

export const offer = [
    {
        src : offer1, alt: "offer1"
    },
    {
        src : offer2, alt: "offer2"
    },
    {
        src : offer3, alt: "offer3"
    },
    {
        src : offer4, alt: "offer4"
    },

]

export const sideBar = [
    'Orders and Payment',
    'Shipping and Tracking',
    'Miscellaneous',
    'Returns, Exchange and Refund',
    'Sale Terms and Conditions'
]

export const FAQs = [
    {
        question : "Is there any additional charge for Cash On Delivery (COD) orders?",
        answer : "Yes, we charge a flat fee of ₹29 for Cash On Delivery (COD) orders."
    },
    {
        question : "Can I change or cancel my order after placing it?",
        answer : `Yes, you can change or cancel your order, but it must be done within 24 hours of placing the order. 
        After this period,cancellations or changes may not be possible as the order might already be processed for shipping.`
    },
    {
        question : "What should I do if I received the wrong item?",
        answer : `If you receive the wrong item, please contact our customer support team as soon as possible. 
        Provide your order number and details about the incorrect item. 
        We will arrange for a return or exchange and ensure you receive the correct item promptly.`
    },
    {
        question : "What payment methods do you accept?",
        answer : `We accept a variety of payment methods, including credit and debit cards (Visa, MasterCard, 
        American Express), PayPal, and other secure online payment options.`
    },
    {
        question : "Is my payment information secure?",
        answer : `Yes, your payment information is secure. We use advanced encryption technologies 
        and follow industry best practices to protect your data during transactions.`
    }   

] 

export const sidebarFilters = {
    categories: {
        hoodies: false,
        jackets: false,
        oversizedHoodie: false,  
        oversizedTShirt: false,
        sweatshirts: false,
        tankTop: false,
    },
    genders: {
        men: false,
        women: false,
    },
    price: [0, 2499], 
    sizes: {
        S: false,
        M: false,
        L: false,
        XL: false,
        XXL: false,
    },
    themes: {
        Naruto: false,
        OnePiece: false,
        Attack_On_Titan: false,
        sporty: false,
    },
    colors: {
        black: false,
        white: false,
        red: false,
        blue: false,
        green: false,
    },
    availability: {
        inStock: false,
        outOfStock: false,
    },
};
