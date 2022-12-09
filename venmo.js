window.MyVenmoZoidComponent = zoid.create({
    dimensions: {
        width: '300px',
        height: '400px',
    },

    // The html tag used to render my component

    tag: 'my-login-component',
    popupBridge: window.popupBridge,

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page

    url: new URL('venmo.html', window.location.href).href
});