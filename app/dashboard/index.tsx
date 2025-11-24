import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useSupabase } from "@/context/SupabaseContext";

const MapScreen = () => {
    const { logout } = useSupabase();

    return (
        <View>
            <Button onPress={() => logout()}><Text>Logout</Text></Button>
        </View>
    )
}

export default MapScreen;