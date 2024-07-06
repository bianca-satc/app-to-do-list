import { useState } from "react";
import { FlatList, View, } from "react-native";
import { Checkbox, List } from "react-native-paper";

export default function Home() {
    const [data, setData] = useState([
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
          status: false,
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
          status: true,
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
          status: true,
        },
      ]);
    
      function updateData(id, status) {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, status: status } : item
        );
        setData(updatedData);
      }
      
    return (
    <View>
        <FlatList
            contentContainerStyle={{ 
                paddingHorizontal: 16, 
                paddingVertical: 12 }}
            data={data}
            renderItem={({ item }) => (
                <List.Item
                    title={item.title}
                    description="Item description"
                    onPress={() => updateData(item.id, !item.status)}
                    left={() => (
                        <Checkbox
                            status={item.status ? "checked" : "unchecked"}
                            onPress={() => {
                                updateData(item.id, !item.status);
                            }}
                        />
                    )}
                />
            )}
            keyExtractor={(item) => item?.id}
        />
        </View>
    )
}