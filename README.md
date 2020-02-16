# react-aspnet-core-jwt-sample

- instruction to call api

	- first need to call with username and password(need to check with active directory
	or alternate way like ping federate/ kong etc) authto get the token
	- without token if we access distance it will give 401(un authorized)
	- need to give token as bearer in authorization header
