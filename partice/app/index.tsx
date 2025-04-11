import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ProductImagepage from "./components/ProductImagepage";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
export default function ProjectDetail() {
  
  return (
    <SafeAreaView> <ScrollView>
      
      <ProductImagepage/>
   {/* <ProjectDetail */}

   <View>
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:10, paddingHorizontal:25}}> 
      <Text style={{fontFamily:"cursive", fontSize:25, fontWeight:800}}>$ 17,00</Text>
      <Text style={{padding:10, borderRadius:50, backgroundColor:"lightgray"}}>
        <FontAwesome name="share" size={20} color={"gray"}/>
      </Text>
    </View>
    <View style={{paddingHorizontal:30, marginTop:30}}>
      <Text style={{fontSize:17, fontWeight:400}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis itaque accusamus non dolore rem quae, quaerat nostrum reiciendis natus sint ad optio eum eveniet modi possimus nihil quidem impedit.</Text>
    </View>
    <View style={{flexDirection:"row", paddingHorizontal:30, marginTop:30, justifyContent:"space-between"}}>
      <View style={{flexDirection:"row"}}>
      <Text>Variations</Text>
      <Text>Pink</Text>
      <Text>M</Text>
      </View>
      <View>
        <AntDesign name="arrowright" size={24} color={"blue"}/>
      </View>
      
    </View>
   </View>
      </ScrollView> </SafeAreaView>
   
  );
}
