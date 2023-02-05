interface Menus {
    [key:string] : TimedMenu
}
interface TimedMenu {
    [key:string] : RestaurantMenu
}

interface RestaurantMenu {
    image: string
    menu: Items
}

interface Items {
    [key: string] : Item
}

interface Item {
    price: number
    image: string
}

const menus: Menus = {
    Breakfast: {
        Sukiya: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Sukiya_logo.svg',
            menu: {
                "Bacon-egg breakfast": {
                    price: 390,
                    image: 'https://news.sukiya.jp/special/breakfast/img/img_baconegg.png'
                },
                "Maze-nokke breakfast": {
                    price: 390,
                    image: 'https://news.sukiya.jp/special/breakfast/img/pro_sakehogushi.png'
                },
                "Gyuu-don": {
                    price: 400,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_gyudon_100100.jpg'
                },
                "Frisbee-don": {
                    price: 590,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_don_202800.jpg'
                }
            }
        },
        McDonalds: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg',
            menu: {
                'Egg McMuffin': {
                    price: 240,
                    image: 'https://www.mcdonalds.co.jp/product_images/12/1410-Egg-McMuffin.m.webp?20230116043912'
                },
                'Pancakes': {
                    price: 340,
                    image: 'https://www.mcdonalds.co.jp/product_images/129/4010-Hotcakes.m.webp?20230116045137'
                },
                'Hash Browns': {
                    price: 150,
                    image: 'https://www.mcdonalds.co.jp/product_images/178/5010-hashpotato.m.webp?20230116045349'
                },
                'Big Breakfast Deluxe': {
                    price: 600,
                    image: 'https://www.mcdonalds.co.jp/product_images/140/4062-Big-Breakfast-Deluxe.m.webp?20230116045254'
                }
            }
        },

    },
    Lunch: {
        Sukiya: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Sukiya_logo.svg',
            menu: {
                "Beef lunch": {
                    price: 600,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_special_400100.jpg'
                },
                "Natto lunch": {
                    price: 420,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_special_406800.jpg'
                },
                "Gyuu-don": {
                    price: 400,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_gyudon_100100.jpg'
                },
                "Frisbee-don": {
                    price: 590,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_don_202800.jpg'
                }
            }
        },
        Gusto: {
            image: 'https://www.skylark.co.jp/site_resource/gusto/images/logo.svg',
            menu: {
                'Teritaru-Karaage-don': {
                    price: 650,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/0115664s/original_0115664s.jpg'
                },
                'Locomoco-don': {
                    price: 650,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/0115763s/original_0115763s.jpg'
                },
                'Double Unagi bento': {
                    price: 1890,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/GT001E7032/original_GT001E7032.jpg'
                }
            }
        }
    },
    Dinner: {
        Sukiya: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Sukiya_logo.svg',
            menu: {
                "Gyuu-don": {
                    price: 400,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_gyudon_100100.jpg'
                },
                "Frisbee-don": {
                    price: 590,
                    image: 'https://www.sukiya.jp/menu/img/in/photo_don_202800.jpg'
                }
            }
        },
        Yumean: {
            image: 'https://www.skylark.co.jp/site_resource/yumean/images/logo.svg',
            menu: {
                'Pork-cutlet-don': {
                    price: 1220,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/2246317/original_2246317.jpg'
                },
                'Tempura Soba': {
                    price: 1440,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/2248032/original_2248032.jpg'
                }
            }
        },
        Jonathan: {
            image: 'https://www.skylark.co.jp/site_resource/jonathan/images/logo.svg',
            menu: {
                '6pc Chicken Tenders': {
                    price: 1500,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/24217/original_24217.jpg'
                },
                '6pc Chicken Thighs': {
                    price: 1500,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/24428/original_24428.jpg'
                },
                '6pc Chicken Combination': {
                    price: 1500,
                    image: 'https://delivery.skylark.co.jp/backend_assets/x3/images/24429/original_24429.jpg'
                }
            }
        }
    }
}

export default menus;