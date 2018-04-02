<script>
	// same configuration as the App Client in the User Pool
    const userpool_conf = {
        ClientId: 'xxxxxxxxxxxxxxx',
        AppWebDomain: 'ucompare.auth.us-east-1.amazoncognito.com',
        TokenScopesArray: ['profile', 'email', 'openid'],
        RedirectUriSignIn: 'http://localhost:3000/auth/facebook/',
        RedirectUriSignOut: 'http://localhost:3000/auth/facebook/'
    };
    // create the auth object
    const auth = new AmazonCognitoIdentity.CognitoAuth(userpool_conf);
    // handlers on successful/failed login
    auth.userhandler = {
        onSuccess: function(result) {
            console.log('Login was successful', result);
            const access_token = result.getAccessToken().getJwtToken();
            const access_payload = JSON.parse(atob(access_token.split('.')[1]));
            const access_formatted = JSON.stringify(access_payload, null, 4);
            let body = `<b>Access Token payload</b><p>${access_formatted}</p>`;
            const id_token = result.getIdToken().getJwtToken();
            // ID Token can be missing if openid scope is not specified
            if (id_token) {
                const id_payload = JSON.parse(atob(id_token.split('.')[1]));
                const id_formatted = JSON.stringify(id_payload, null, 4);
                body += `<b>ID Token payload</b><p>${id_formatted}</p>`;
            } else {
                body += '<b>No ID Token returned, probably you did not specify openid scope!</b>';
            }
            body += '<button onclick="auth.signOut()">Logout</button>';
            document.body.innerHTML = body;

        },
        onFailure: function(err) {
            document.body.innerHTML = 'Error logging in!' + err;
        }
    };
    // if we got redirected here with the tokens
    if (window.location.href.indexOf('access_token') > -1) {
        // parse them
        auth.parseCognitoWebResponse(window.location.href);
        console.log('Token(s) parsed');
    } else {    
        // getSession() retrieves the session if active,
        // otherwise redirects to the Hosted UI
        auth.getSession();
        console.log('Session retrieved')
    }
</script>