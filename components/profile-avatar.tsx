import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

const EditIcon = () => (
  <View style={styles.editIconContainer}>
  <Image
  style={styles.editIconImage}
  source={require('../assets/crayon.png')}
  />
  </View>
);

const CameraIcon = () => (
  <View style={styles.cameraIconContainer}>
  <Image
  style={styles.editIconImage}
  source={require('../assets/white_crayon.png')}
  />
  </View>
);

const ProfileComponent = () => {
  const handleEditProfile = () => {
    console.log('Edit profile pressed');
    // Navigate to edit profile screen
  };

  const handleEditPhoto = () => {
    console.log('Edit photo pressed');
    // Open camera/gallery picker
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.title}>Profile</Text>
    <Pressable
    onPress={handleEditProfile}
    style={({ pressed }) => [
      styles.editButton,
      pressed && styles.editButtonPressed
    ]}
    android_ripple={{ color: '#e3f2fd', borderless: true }}
    >
    <EditIcon />
    <Text style={styles.editButtonText}>Edit</Text>
    </Pressable>
    </View>

    <View style={styles.profileSection}>
    <View style={styles.imageContainer}>
    <Image
    source={{
      uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    }}
    style={styles.profileImage}
    />
    <Pressable
    onPress={handleEditPhoto}
    style={({ pressed }) => [
      styles.editPhotoButton,
      pressed && styles.editPhotoButtonPressed
    ]}
    android_ripple={{ color: '#ffffff20', borderless: true }}
    >
    <CameraIcon />
    </Pressable>
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonPressed: {
    backgroundColor: '#e3f2fd',
  },
  editButtonText: {
    fontSize: 16,
    color: '#4285f4',
    fontWeight: '500',
    marginLeft: 4,
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
  },
  editPhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4285f4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  editPhotoButtonPressed: {
    backgroundColor: '#3367d6',
    transform: [{ scale: 0.95 }],
  },
  editIconContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  cameraIconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconText: {
    fontSize: 16,
  },
});

export default ProfileComponent;
