import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { TestModel } from './models';
import{withAuthenticator, Button, Heading, Image, View, Card} from '@aws-amplify/ui-react';

async function Test(){
  await DataStore.save(
    new TestModel({
		"Username": "Lorem ipsum dolor sit amet",
		"Password": "Lorem ipsum dolor sit amet"
	})
);

}
function App({signOut}) {
  
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);