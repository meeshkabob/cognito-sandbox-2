import { Component, ViewChild, ElementRef } from "@angular/core";
// require this to fix an issue with xhr event states
// require('nativescript-nodeify');

// register a user (here's a bit, but see the demo and https://github.com/aws/amazon-cognito-identity-js for details)
// var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
// var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
// var userPool = new CognitoUserPool({
//     UserPoolId: 'us-east-1_urOvP1l03', 
//     ClientId: '1v1lnj38t1pr9s868v709762jr'
// });

 
// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require('amazon-cognito-auth-js');
var CognitoAuth = AmazonCognitoIdentity.CognitoAuth;

/*
  TokenScopesArray
  Valid values are found under:
  AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings
  Example values: ['profile', 'email', 'openid', 'aws.cognito.signin.user.admin', 'phone']
 
  RedirectUriSignOut 
  This value must match the value specified under:
  AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings -> Sign out URL(s)
*/
var authData = {
    UserPoolId: 'USERPOOLID', 
    ClientId: 'CLIENTID',
    AppWebDomain : '/',
    TokenScopesArray : [], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
    RedirectUriSignIn : '/items',
    RedirectUriSignOut : '/',
    // IdentityProvider : '<TODO: add identity provider you want to specify>', // e.g. 'Facebook',
    // AdvancedSecurityDataCollectionFlag : '<TODO: boolean value indicating whether you want to enable advanced security data collection>', // e.g. true
    //     Storage: '<TODO the storage object>' // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
};
var auth = new CognitoAuth(authData);

auth.userhandler = {
	onSuccess: function(result) {
		console.log("Sign in success");
	},
	onFailure: function(err) {
		console.log("Error!");
	}
};

@Component({
  selector: "ns-login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  @ViewChild("username") username: ElementRef;
  @ViewChild("password") password: ElementRef;

  submit() {
    console.log('submit');
  }
}
