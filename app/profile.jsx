import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const profile = () => {
  const router = useRouter();

  // states
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [vki, setVki] = useState(null);
  const [visibleVKI, setVisibleVKI] = useState(false);

  const calculateVki = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100; // cm cinsinden boyu metre cinsine çevir
      const vkiValue = weightInKg / (heightInM * heightInM); // VKİ hesaplama formülü

      setVki(vkiValue.toFixed(2)); // VKİ'yi 2 ondalık basamakta göster
      setVisibleVKI(false);
    } else {
      alert("Lütfen geçerli bir ağırlık ve boy girin.");
    }
  };

  return (
    <SafeAreaView className="flex-1 mt-1">
      <View className="flex-row px-3 gap-32">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="red" />
        </TouchableOpacity>
        <View className="justify-center items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <Text className="py-6 from-slate-300">Mike Tyson</Text>
        </View>
      </View>

      <View className="mt-3 ml-3 px-1 font-semibold">
        <Text className="font-bold text-lg mb-6">Genel Bilgiler</Text>
        <View className="gap-5 font-medium">
          <Text>Boy : 1.90m</Text>
          <Text>Kilo : 100kg</Text>
          <Text>Vücut Kitle Indeksi : {vki} </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Pressable
            style={{
              width: "70%",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Button
              title="Vücut Kitle İndeksi hesapla"
              color={"red"}
              onPress={() => setVisibleVKI(true)}
            />
          </Pressable>
        </View>
      </View>

      {visibleVKI && (
        <View className="items-center justify-center mt-5">
          <TextInput
            placeholder="Kilonuzu girin (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
            style={{
              marginBottom: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="Boyunuzu girin (cm)"
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
            style={{
              marginBottom: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 15,
            }}
          />
          <Button title="VKİ Hesapla" onPress={calculateVki} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
