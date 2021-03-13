import * as SMS from 'expo-sms';

const isAvailable = await SMS.isAvailableAsync();
if (isAvailable) {
    const { result } = await SMS.sendSMSAsync(
        ['0772248796'],'Test Mesaj',
      );
} else {
  console.log('error');
}