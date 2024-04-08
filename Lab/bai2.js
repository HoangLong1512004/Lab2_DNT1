import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Bai2 = ({ title, imageSource, location, description, backgroundColor, time, time1, car, car1, sub }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.description}>{location} {'\n'}
        <Text style={styles.title}>{title}</Text>
      </Text>
      <Text style={styles.description}>{time}{'\n'}
        <Text style={styles.title}>{time1}</Text>
      </Text>
      <Text style={styles.description}>{car}{'\n'}
        <Text style={styles.title}>{car1}</Text>
      </Text>

      <Text style={styles.description}>{description}</Text>
      <View style={styles.imageContainer}>

        <Image source={imageSource} style={styles.image} />
        {sub ? <TouchableOpacity style={styles.sub}>
          <Text style={styles.title}>{sub}</Text>
        </TouchableOpacity> : <View />}
      </View>
    </View>
  );
};

const HH = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text style={styles.sectionTitle}>Lịch trình</Text>
      <Bai2
        location="Địa điểm:"
        title="SAPA"
        time="Thời gian:"
        time1="10h ngày 30/2/2024"
        car="phương tiện di chuyển:"
        car1="RR"
        description="Hình ảnh:"
        imageSource={{
          uri: 'https://i.pinimg.com/564x/c8/a1/5f/c8a15ff316f7c74b789d21651b0891f8.jpg',
        }}
        backgroundColor="green"
      />
      <Text style={styles.sectionTitle}>Khách Sạn</Text>
      <Bai2
        location="Khách sạn:"
        title="NOVOTEL"
        time="Giờ mở cửa:"
        time1="06:00 AM - 12:00PM"
        car="Địa chỉ:"
        car1="83-Ngô Quyền"
        imageSource={{
          uri: 'https://i.pinimg.com/564x/c8/a1/5f/c8a15ff316f7c74b789d21651b0891f8.jpg',
        }}
        description="Hình ảnh:"
        backgroundColor="#E9ECEF"
        sub="submit"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  container: {
    width: '90%',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#212529', // Đen
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: '#212529', // Đen
  },
  description: {
    marginBottom: 5,
    fontSize: 18,
    color: '#495057', // Xám đậm
  },
  imageContainer: {
    width: 'auto',
    height: 'auto',
    marginBottom: 10,
    alignItems: "center"
  },
  sub: {
    padding: 10,
    backgroundColor: 'cyan',
    margin: 10,
    borderRadius: 20
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default HH;
