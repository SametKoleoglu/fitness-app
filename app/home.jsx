import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="auto" />

      {/* punchilne and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            No PAIN
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            No GAIN
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <TouchableOpacity onPress={() => router.push("profile")}>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ height: hp(6), width: hp(6) }}
              className="rounded-full"
            />
          </TouchableOpacity>

          <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <TouchableOpacity onPress={() => router.push('notification')}>
              <Ionicons name="notifications" size={hp(3)} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* image slider */}
      <View>
        <ImageSlider />
      </View>

      {/* body parts list */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
