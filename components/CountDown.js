import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const CountDown = (props) => {
  const {date, description} = props.data;
  const targetTime = new Date(date).getTime();

  const [timeObj, setTimeObj] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const isExpired = props.expired;

  const getCountDownTime = (targetTime) => {
    const timeNow = new Date().getTime();
    const delta = targetTime - timeNow;

    if(delta <= 0) {
      props.handleExpired(true);

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    const days = delta / (1000 * 60 * 60 * 24)
    const hours = (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    const minutes = (delta % (1000 * 60 * 60)) / (1000 * 60);
    const seconds = (delta % (1000 * 60)) / 1000;

    return {
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    }
  }

  useEffect(() => {
    setTimeObj(getCountDownTime(targetTime));
  }, []);

  useEffect(() => {
    if(!targetTime) return;

    const timer = setInterval(() => {
      setTimeObj(
        getCountDownTime(targetTime)
      )
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [targetTime])

  return (
    <View className="flex-row justify-center border border-white">
      {
        Object.keys(timeObj).map((key, index) => {
          return (
            <View
              key={index}
              className="flex-1 items-center justify-center"
            >
              <Text className="text-white p-4 text-3xl flex1 justify-center ">
                {timeObj[key]}
              </Text>

              <Text className="bg-white w-full text-center p-1">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
            </View>
          )
        })
      }
    </View>
  )
}
export default CountDown;
