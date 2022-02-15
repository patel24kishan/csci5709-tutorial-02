# Assignment 01

- _Date Created_: 4 Feb 2022
- _Last Modification Date_: 10 Feb 2022
- _Git URL_:https://git.cs.dal.ca/kahodariya/a1_kishan_kahodariya
- _Git Group Repo URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project
- _Git Group Repo Individual branch URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/kishan

## Authors

- [Kishan Kahodariya](ks805556@dal.ca) - _(Student)_

## Getting Started

- npm install react --save
- npm install react-bootstrap
- npm install react-datepicker

### Installing

- Download and install nodejs from https://nodejs.org/en/
- Download and install react from https://reactjs.org/

## Deployment

- _Deployment URL_: https://csci5709-assignment-01.herokuapp.com/

## Sources Used

### Navigationbar.css

Lines 1 - 6

```
.navbar {
  display: flex;
  flex-direction: row;
  margin-left: 0px;
  margin-right: 60px;
}

```

The code above was created by adapting the code in [Navbar.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/navbar/Navbar.css) as shown below:

```
.navbar {
  display: flex;
  flex-direction: row;
}

.navbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  color: inherit;
  text-decoration: inherit;
  text-transform: uppercase;
  outline: none;
}

```

-The code in [Navbar.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/navbar/Navbar.css) was implemented by IVIURRAY.

- [Navbar.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/navbar/Navbar.css) was used because it met my basic stylng requirements for the page I have created according to my wireframe.

- [Navbar.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/navbar/Navbar.css) Code was modified by adding margin-left and margin- right properties to the navbar class.

### Header.css

Lines 1 - 43

```
.header {
  margin-top: 20px;
  display: flex;
  flex: 0;
  flex-direction: column;
}

.header-top {
  display: flex;
  width: 100%;
  height: 80px;
}

.header-top-logo {
  display: flex;
  justify-content: right;
  align-items: left;
  margin-right: 0px;
  margin-left: 20px;
}

.header-top-right-logo {
  display: flex;
  justify-content: center;
  align-items: right;
  margin-right: 20px;
  margin-left: 540px;
}

.header-top__navbar {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
}

.header-bottom {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6px;
}


```

The code above was created by adapting the code in [Header.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/header/Header.css) as shown below:

```
.header {
  margin-top: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
}

.header-top {
  display: flex;
  width: 100%;
  height: 80px;
}

.header-top__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.header-logo {
  color: inherit;
  text-decoration: inherit;
  font-family: RobotoThin;
  font-size: 100px;
}

.header-top__navbar {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.header-top__seperator {
  width: 100%;
  border: none;
  height: 2px;
  margin-top: 2px;
  background-color: black;
}

.header-top__navigation {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 55px;
}

.header-bottom {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6px;
}

.header-bottom__email {
  margin-right: 55px;
}

.header-bottom__phone {
  margin-right: 65px;
}

.header-bottom__bag {
  position: absolute;
  display: flex;
}

.header-bottom__bag-icon {
  position: relative;
  display: flex;
  left: -5px;
  width: 30px;
  height: 30px;
}

.header-bottom__bag-count {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: RobotoRegular;
  right: 0px;
  top: -5px;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 10px;
  color: white;
}

```

- The code in [Header.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/header/Header.css) was implemented by IVIURRAY.

- [Header.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/header/Header.css) Code was used because because it acted as my boilder plate code for styling my header component.

- [Header.css](https://github.com/IVIURRAY/yt-my-first-react-app/blob/2-header-component/src/components/common/header/Header.css) Code was modified by keeping only those classes (header., header-top, header-top-logo, header-top\_\_navbar and header-bottom) and adding new as well as modifying exisitng properties of these classes. Second, have added new class (header-top-right-logo) and have removed all other unnecessary classes which didn't fit my styling requirements

### CustomSearch.css

Lines 1 - 111

```
body {
  background: #ffffff;
  display: flex;
}

.form-container {
  width: 1300px;
  background-color: rgb(182, 182, 182);
  margin: auto;
  padding: 10px;
}

.register-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
}

input {
  background: #ffffff;
}
input::placeholder {
  font-style: italic;
  font-size: 13px;
  color: rgb(150, 150, 150);
}

.input-toggle-btn {
  margin-left: 20px;
  font-style: italic;
}

h5 {
  font-size: 16px;
  color: red;
}

.locationerror {
  margin-left: 65px;
}

.durationerror {
  margin-left: 170px;
}

.checkinerror {
  margin-left: 170px;
}

.checkouterror {
  margin-left: 100px;
}

.mainsearchbutton {
  background: #38d0eb;
  height: 30px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  border-radius: 9px;
}

.customsearch {
  background-color: #38d0eb;
  align-items: center;
  width: 200px;
  height: 80px;
  font-size: 40px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-align: center;
  align-items: center;
  margin-left: 42%;
  border-radius: 18px;
}

.search-tool {
  margin-left: 30px;
}

.footer {
  width: 1400px;
  height: 170px;
  text-align: center;
  color: #ffffff;
  background-color: rgb(27, 27, 27);
  margin: auto;
  margin-bottom: 50px;
  padding: 50px;
}

.socialmedia {
  display: flex;
  justify-content: right;
  align-items: right;
  padding: 10px;
  margin-right: 100px;
  margin-left: 940px;
}

.customheader {
  margin-left: 50px;
}

.input-spacing {
  margin-left: 20px;
}

```

The code above was created by adapting the code in [index.css](https://github.com/chrisblakely01/basic-react-forms/blob/master/src/index.css) as shown below:

```
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

body {
  background: #76b852;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 360px;
  background-color: white;
  margin: auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  padding: 10px;
}

.register-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
}

.success-message {
  font-family: "Roboto", sans-serif;
  background-color: #3f89f8;
  padding: 15px;
  color: white;
}

.form-field {
  margin: 10px 0 10px 0;
  padding: 15px;
  font-size: 16px;
  border: 0;
  font-family: "Roboto", sans-serif;
}

span {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: red;
  margin-bottom: 15px;
}

input {
  background: #f2f2f2;
}

.error {
  border-style: solid;
  border: 2px solid #ffa4a4;
}

button {
  background: #4caf50;
  color: white;
  cursor: pointer;
}

button:disabled {
  cursor: default;
}

```

- The code in [index.css](https://github.com/chrisblakely01/basic-react-forms/blob/master/src/index.css) was implemented by chris-blakely-da
- [index.css](https://github.com/chrisblakely01/basic-react-forms/blob/master/src/index.css) Code was used because it provides me some styling boiler plate code for styling my main content within my page.
- [index.css](https://github.com/chrisblakely01/basic-react-forms/blob/master/src/index.css)Code was modified by modifying properties of the existing classes like body, form-container, reigistration-form and also adding new classes for classes like h5, mainsearchbutton,customsearch and few more. Also, classes like span and form-field have been removed as they are not required in my design.

## Acknowledgments

### Hat Tip

- chris-blakely-da (https://github.com/chrisblakely01)
- IVIURRAY (https://github.com/IVIURRAY)

### Image References

- Logo.png (https://cacoo.com/)
- User.png (https://cacoo.com/)
