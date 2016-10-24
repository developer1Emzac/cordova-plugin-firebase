exports.getInstanceId = function(success, error) {
    success();
};

exports.getToken = function(success, error) {
    success();
};

exports.onNotificationOpen = function(success, error) {
};

exports.onTokenRefresh = function(success, error) {
};

exports.grantPermission = function(success, error) {
    success();
};

exports.setBadgeNumber = function(number, success, error) {
    success();
};

exports.getBadgeNumber = function(success, error) {
    success();
};

exports.subscribe = function(topic, success, error) {
    success();
};

exports.unsubscribe = function(topic, success, error) {
    success();
};

exports.logEvent = function(name, params, success, error) {
    success();
};

exports.setUserId = function(id, success, error) {
    success();
};

exports.setUserProperty = function(name, value, success, error) {
    success();
};

exports.activateFetched = function (success, error) {
    success();
};

exports.fetch = function (cacheExpirationSeconds, success, error) {
    success();
};

exports.getByteArray = function (key, namespace, success, error) {
    success();
};

exports.getValue = function (key, namespace, success, error) {
    success();
};

exports.getInfo = function (success, error) {
    success();
};

exports.setConfigSettings = function (settings, success, error) {
    success();
};

exports.setDefaults = function (defaults, namespace, success, error) {
    success();
};

exports.createAccount = function (email, password, success, error) {
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
		success(user);
	}).catch(function(dataerror) {
		error(dataerror);
	});
};

exports.login = function (email, password, success, error) {
	firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
		success(user);
	}).catch(function(dataerror) {
		error(dataerror);
	});
};

exports.logout = function (success, error) {
	firebase.auth().signOut().then(function() {
		success();
	}, function(dataerror) {
		error(dataerror);
	});
};

exports.isLogin = function (success, error) {
	var user = firebase.auth().currentUser;

	if (user) {
	  success();
	} else {
	  error();
	}
};