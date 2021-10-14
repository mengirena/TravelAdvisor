# Pricing component

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)]()

👆🏽 click to check the live page


## Demo


## How it's built
**Tech used:** ReactJS, Rapid API, Google map, Material UI

## Lesson learned

### Install the dependency

```
npm install @material-ui/core @material-ui/icons @material-ui/lab @react-google-maps/api axios google-map-react
```

### Using Google Map in React

**Library setup**

1. Install the library `google-map-react` and import component `GoogleMapReact` from the library 

```
npm install google-map-react
```

```
import GoogleMapReact from 'google-map-react'
```

2. Use the component and add props to control the map setup

```js
    <GoogleMapReact 
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={ {lat: 0, lng: 0} }
        center={ {lat: 0, lng: 0} }
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
    >
```


**Google Cloud Platform setup**

1. Go to [Google Cloud platform](https://console.cloud.google.com/projectcreate) to create new project 

2. Go to the project and go to the dashboard of `APIs & Services`

3. Search `Maps JavaScript API` in the library and enable it

4. Go to `Credential` to select `API key` to create credentials (save the API key and paste it in the `bootstrapURLKeys`)

### Using material UI


### useStyles

### Material UI + styled component

### Optional chaining

`?.` it can be used to read the value of a property without requiring to check the existence of this property. When the property doesn't exist, it will return `undefined`.

```js
    const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
    };

    const dogName = adventurer.dog?.name;
    console.log(dogName);
    // expected output: undefined
```

### axios