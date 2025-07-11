import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Switch,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [text, setText] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isChecked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Componentes en React Native</Text>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 1 - Entrada de texto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo"
          value={text}
          onChangeText={setText}
        />
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 2 - Botón básico:</Text>
        <Button title="Presióname" onPress={() => alert('¡Botón presionado!')} />
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 3 - Imagen desde URL:</Text>
        <Image
          source={{ uri: 'https://wallpapers.com/images/hd/on-podium-real-madrid-4k-x2v9krk4qbxqxrrm.jpg' }}
          style={styles.image}
        />
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 4 - Interruptor:</Text>
        <Switch value={isSwitchOn} onValueChange={setIsSwitchOn} />
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 5 - Selector de opciones:</Text>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          <Picker.Item label="Opción 1" value="option1" />
          <Picker.Item label="Opción 2" value="option2" />
          <Picker.Item label="Opción 3" value="option3" />
        </Picker>
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 6 - Botón personalizado:</Text>
        <TouchableOpacity style={styles.customButton} onPress={() => alert('Botón presionado')}>
          <Text style={styles.customButtonText}>Tócame</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 7 - Casilla de verificación:</Text>
        <View style={styles.checkboxRow}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text style={styles.checkboxLabel}>Acepto los términos</Text>
        </View>
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 8 - Control deslizante:</Text>
        <Text style={{ marginBottom: 5 }}>Volumen: {Math.round(sliderValue)}</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumTrackTintColor="#6200EE"
        />
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 9 - Indicador de carga:</Text>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>

      <View style={styles.component}>
        <Text style={styles.label}>Componente 10 - Modal emergente:</Text>
        <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={{ marginBottom: 20, fontSize: 16 }}>Ejemplo para el modal</Text>
              <Pressable style={styles.customButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.customButtonText}>Cerrar modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  component: {
    marginBottom: 25,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  customButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  customButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
});
