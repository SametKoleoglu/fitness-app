import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const notification = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="flex-row gap-36">
        <Pressable onPress={() => router.back()}>
          <Ionicons
            style={{ marginLeft: 10 }}
            name="arrow-back"
            size={26}
            color="red"
          />
        </Pressable>
        <View className="items-center">
          <Ionicons name="notifications" size={27} color="red" />
        </View>
      </View>

      <Text className="font-semibold text-2xl px-2 mt-6">Bildirimler</Text>

      <View className="py-5 text-center gap-5">
        <View className="items-center flex-row gap-2">
          <MaterialIcons
            style={{ borderRadius: 18, borderWidth: 1, borderColor: "#e85d04" }}
            name="fitness-center"
            size={32}
            color="#d00000"
          />
          <Text className="font-semibold">Bugün kaç şınav çekdiniz ? </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <MaterialIcons
            style={{ borderRadius: 18, borderWidth: 1, borderColor: "#e85d04" }}
            name="fitness-center"
            size={32}
            color="#d00000"
          />
          <Text className="font-semibold">Bugün antrenman yaptınız mı ?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default notification;

const styles = StyleSheet.create({});
