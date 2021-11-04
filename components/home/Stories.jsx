import React from 'react'
import { View, Text ,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native'
import {User} from '../../data/Users'

const Stories = () => {
    return (
        <View style={{marginBottom:13}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                User.map((story,index)=>(
                <View key={index} style={{alignItems:"center"}}>
                    <Image source={story.url} style={styles.story}/>
                    <Text style={{color:"white"}}>{
                     story.user.length > 11 ?story.user.slice(0,10)+"...":story.user
                    }</Text>
                </View>
                ))
            }
          </ScrollView> 
        </View>
    )
}

const styles=StyleSheet.create({
 story:{
    width:70,
    height:70,
    borderRadius:"50%",
    marginRight:5,
    marginLeft:5,
    borderWidth:3,
    resizeMode:"cover",
    borderColor:"#ff8501"
 }
})
export default Stories
