import React, {Component} from "react"
import {
    Text,
    View,
    Image
} from "react-native"

import Swiper from "react-native-swiper"

// const {width} = Dimensions.get('window')

const Slider = props => (
    <View style={Styles.container}>
        <Image style={styles.Image} source={props.url}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
    }
}

export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            imagesSlider: [
                require('../images/perro1.jpg'),
                require('../images/perro2.jpg'),
                require('../images/perro3.jpg'),
                require('../images/perro4.jpg')
            ]

        }
    }
    render(){
        return (
            <View>
                <Swiper
                    autoplay
                    height={240}
                
                >
                {
                    this.state.imagesSlider.map((item, i) => <Slider
                    url={item}
                    key={i}
                    /> 
                    )
                }



                </Swiper>
                
            </View>
        )
    }
}
