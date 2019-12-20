$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("companies.feature");
formatter.feature({
  "line": 1,
  "name": "New Company Creation",
  "description": "",
  "id": "new-company-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new company with Map",
  "description": "",
  "id": "new-company-creation;free-crm-create-a-new-company-with-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "debomalya",
        "debo@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User move to New Company page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enter company details",
  "rows": [
    {
      "cells": [
        "Company",
        "Employees",
        "City",
        "Country",
        "Phone"
      ],
      "line": 14
    },
    {
      "cells": [
        "ORACLE",
        "25000",
        "HYD",
        "IND",
        "9785649878"
      ],
      "line": 15
    },
    {
      "cells": [
        "HARMAN",
        "20000",
        "BLR",
        "IND",
        "8056784567"
      ],
      "line": 16
    },
    {
      "cells": [
        "ACCENTURE",
        "30000",
        "BLR",
        "IND",
        "8076549567"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 48412425300,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 56441400,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.User_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 4881246400,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 23261380400,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 62595400,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.user_move_to_New_Company_page()"
});
formatter.result({
  "duration": 1506339800,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.user_enter_company_details(DataTable)"
});
formatter.result({
  "duration": 852821400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#num_of_employees\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DEMON\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\debma\\AppData\\Local\\Temp\\scoped_dir11864_1061475032}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49165}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: fe240f43980320d28086f2083d7ce5fe\n*** Element info: {Using\u003did, value\u003dnum_of_employees}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.CompaniesStepDefination.user_enter_company_details(CompaniesStepDefination.java:74)\r\n\tat ✽.Then User enter company details(companies.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create A New Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "debomalya",
        "debo@123",
        "Cristiano",
        "Ronaldo",
        "Player"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "debomalya",
        "debo@123",
        "Zinidine",
        "Zidan",
        "Manager"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    },
    {
      "cells": [
        "debomalya",
        "debo@123",
        "Leonel",
        "Messi",
        "Player"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Create A New Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"debomalya\" and \"debo@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Cristiano\" and \"Ronaldo\" and \"Player\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 44749043000,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 19429000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create A New Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"debomalya\" and \"debo@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Zinidine\" and \"Zidan\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 42133470000,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 9509900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create A New Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"debomalya\" and \"debo@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Leonel\" and \"Messi\" and \"Player\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 58134448800,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 33585800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deals data creation",
  "description": "",
  "id": "deals-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deals-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "debomalya",
        "debo@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User move to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "testdeal",
        "1000",
        "50",
        "10"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 40441219200,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 555261300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DEMON\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\debma\\AppData\\Local\\Temp\\scoped_dir9076_138168550}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49646}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 61297359697980e0d82cd59881343b7a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:374)\r\n\tat stepDefinitions.CompaniesStepDefination.title_of_Login_page_is_Free_CRM(CompaniesStepDefination.java:31)\r\n\tat ✽.When title of Login page is Free CRM(deals.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CompaniesStepDefination.User_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deals data creation with map",
  "description": "",
  "id": "deals-data-creation-with-map",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario with map",
  "description": "",
  "id": "deals-data-creation-with-map;free-crm-create-a-new-deal-scenario-with-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "debomalya",
        "debo@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User move to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 14
    },
    {
      "cells": [
        "Reebok",
        "8000",
        "50",
        "70"
      ],
      "line": 15
    },
    {
      "cells": [
        "Adidas",
        "5000",
        "30",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "Fila",
        "seven",
        "22",
        "44"
      ],
      "line": 17
    },
    {
      "cells": [
        "Nike",
        "7000",
        "40",
        "20"
      ],
      "line": 18
    },
    {
      "cells": [
        "Puma",
        "6000",
        "33",
        "40"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 36876528300,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 11538100,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.User_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 669582900,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "duration": 16336147300,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 12330000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#Given User is already on Login page"
    },
    {
      "line": 6,
      "value": "#When title of Login page is Free CRM"
    },
    {
      "line": 7,
      "value": "#Then User enter \"debomalya\" and \"debo@123\""
    },
    {
      "line": 8,
      "value": "#Then User clicks on login Button"
    },
    {
      "line": 9,
      "value": "#And user is on HomePage"
    }
  ],
  "line": 12,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "debomalya",
        "debo@123"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "tom@123"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enter \"debomalya\" and \"debo@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 17775362600,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 16102800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enter \"tom\" and \"tom@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 9548870200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DEMON\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\debma\\AppData\\Local\\Temp\\scoped_dir448_701257971}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49849}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 927f2754bb0ee4b9c1343419d0f18f41\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat stepDefinitions.CompaniesStepDefination.user_is_already_on_Login_page(CompaniesStepDefination.java:26)\r\n\tat ✽.Given User is already on Login page(login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CompaniesStepDefination.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CompaniesStepDefination.user_clicks_on_login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompaniesStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});