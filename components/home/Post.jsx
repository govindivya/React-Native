import React ,{useState,useEffect}from "react";
 
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { PostData } from "../../data/PostData";
import { Divider } from "react-native-elements";

const footerIcon = [
  {
    name: "Like",
    imageUrl:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/like--v1.png",
    likedImageUrl:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/heart.png",
  },
  {
    name: "Comment",
    imageUrl:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/chaticon.png",
  },
  {
    name: "Share",
    imageUrl:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/instashare.png"
  },
  {
    name: "Save",
    imageUrl:"https://raw.githubusercontent.com/govindivya/React-Native/master/assets/images/shaver.png"
  },
];

const Post = ({ post }) => {
  const [displayComment, setDisplayComment] = useState(false);
  const handleDisplay=(e)=>{
    setDisplayComment(!displayComment);
  }
  return (
    <View style={{ marginBottom:50, padding: 2 }}>
      <Divider
        width={1}
        orientation="horizontal"
        style={{ backgroundColor: "#171718" }}
      />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post}/>
        <Caption post={post} />
        <CommentSection post={post} handleDisplay={handleDisplay} displayComment={displayComment} />
       {
         displayComment &&  <Comment post={post}/>
       }
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        padding: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={{uri:post.profile_picture}} style={styles.profileImage} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: 600 }}>
          {post.user}
        </Text>
      </View>
      <View>
        <Text style={{ color: "white", fontWeight: 900 }}>. . .</Text>
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ padding: 5, width: "100%", height: 450 }}>
      <Image
        source={{uri:post.imageUrl}}
        style={{
          height: "100%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ flexDirection: "row" }}>
      <Icons imgStyle={styles.footerIcon} imgUrl={footerIcon[0].imageUrl} />
      <Icons imgStyle={styles.footerIcon} imgUrl={footerIcon[1].imageUrl} />
      <Icons imgStyle={styles.footerIcon} imgUrl={footerIcon[2].imageUrl} />
    </View>
    <View>
      <Icons imgStyle={styles.footerIcon} imgUrl={footerIcon[3].imageUrl} /> 
    </View>
  </View>
);

const Icons = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{uri:imgUrl}} />
  </TouchableOpacity>
);


const Likes=({post})=>(
<View style={{flex:1,flexDirection:"row" ,marginTop:5}}>
  <Text style={{color:"white",fontWeight:600,fontSize:13}}>{
    post.likes?post.likes+ " likes ":""
  }</Text>
</View>
)

const Caption=({post})=>(
  <View style={{marginTop:5}}>
    <Text style={{color:"white"}}>{post.caption ? post.caption+ " ......" : ""}</Text>
  </View>
)


const CommentSection=({post,handleDisplay,displayComment})=>{
 var a=[];
 for(let key in post.comments){
   a.push(post.comments[key]);
 }
  return  <View>
  <Text style={{color:"gray",cursor:"pointer"}} onClick={handleDisplay}>{
   !displayComment?( a.length!=0?(a.length>1?`View all ${a.length} comments`:"View 1 comment"):"") :"Close comment section" }</Text>
</View>
}

const Comment=({post})=>(
 <>
 {
   post.comments.map((item,index)=>(
    <View key={index}>
    <Text style={{color:"white",fontWeight:600}}>{item.user}</Text>
    <View style={{display:"flex",flexDirection:"row",marginVertical:5}}>
      <Image source={{uri:item.userImage}} style={{width:30,height:30,borderRadius:15}}/>
      <Text style={{color:"gray",fontWeight:400,marginHorizontal:10}}>{item.comment}</Text>
    </View>
   </View>
   ))
 }
 </>
)
const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius:20,
    borderWidth: 1,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 30,
    height: 30,
    color: "white",
    marginRight: 10,
  },
});
export default Post;
