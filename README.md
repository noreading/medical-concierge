# The Medical Concierge

## The Project

This project was created at the [Innovate Healthcare](http://leipzig.innovate.healthcare/) hackathon 2018 in Leipzig.

The idea was to create an app that would better prepare patients in hospitals for their discharge and thus help to avoid the revolving door effect. By entering the [ICD Number](http://apps.who.int/classifications/icd10/browse/2016/en#/). This can reduce anxiety and educate the patient about possible side effects.

In the next step, the patient receives recommendations for action tailored to his illness, such as, for example, starting the search for a physiotherapist during his stay in hospital if he is operated on after a shoulder fracture. Let's stay with the shoulder for the moment to clarify the further process.

Based on simple questions that the patient answers in our guide, the app suggests further useful steps. If the patient lives alone, without family support in the vicinity, calling a taxi from the app can bring the patient safely home after discharge. Public transport carries many risks of injuring the newly operated shoulder again.

Information that the patient may be entitled to domestic help (approx. 40% of health insurances support this) and an integrated search for appropriate service providers can also support the patient.

At the end of the recommendations for action, the patient receives a checklist to be able to organise the necessary preparations for his discharge and the first steps afterwards in a targeted manner. The more the patient takes care of the time after discharge, the less likely it is that he will have to go to hospital again due to a lack of knowledge or unfavourable actions.

## The Technologies

### This Mockup

The demo is based on the [React](https://reactjs.org/) framework and is only a mockup, showing the process for one single illness (S42).

### A real Application

We suggest to develop a real version of the medical concierge as a responsive website that can be used on all devices. Building a website and native apps together would need a lot of development resources and the main features of the application don't rely on special features of phones.

## The Setup

If you want to run the mockup on any computer, you need to install the following technologies:

* [Node.js](https://nodejs.org/en/) + [npm](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/lang/en/)

After installing Node.js and Yarn, you need to load all package dependencies, using Yarn to manage a secure installation.

The application was tested with Node 9.9.

```
yarn install
```

Now, that all packages are installed, you're already able to run the application. The following command will start a local webserver that can be accessed from any computer connected to the same network.

```
yarn start
```
