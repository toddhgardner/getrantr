# getRANTR

Social connections are overrated-they only lead to trouble, pain, and lawsuits. Modern social networks have given rise to trolls, fake news, and mansplaining.

Introducing getRANTR, the revolutionary anti-social distributed network. getRANTR gives you all the obsessive status updating of a social network, with non of the misunderstandings and hurt feelings. With getRANTR, no one can see you RANT.

## Getting Started

getRANTR is a distributed network. This means you download the code and run it yourself! No more annoying "public websites" or "cloud infrastructure". getRANTR includes all the fun of running your own technology stack.

### Software Dependencies

getRANTR is built on NodeJS. If you don't have it already, you can download the latest runtime from the [NodeJS website](https://nodejs.org/en/). For best results, we recommend using version **4.6.0 or higher**.

You may also need the following tools to enhance or debug getRANTR:

- [Atom](https://atom.io/) or another JavaScript-aware text editor
- [Chrome](https://www.google.com/chrome/) web browser
- [Charles](https://www.charlesproxy.com/) or [Fiddler](http://www.telerik.com/fiddler) web proxy

### Hosts file

For best results, add the following entries to your `hosts` file (usually located at `/etc/hosts`):

```
127.0.0.1   getrantr.io
127.0.0.1   cdn.getrantr.io
```

### Installation

getRANTR uses [gulp](http://gulpjs.com/) to handle installation and build automation. You'll want to have it installed globally in your **Node** packages. You'll also need to install all the local dependencies for running getRANTR:

```
npm install gulp --global
npm install
```

### Running getRANTR

After setting everything up and installing the dependencies, you can run getRANTR by:

```
gulp start
```

This will run getRANTR at `http://getRANTR.io:9000/` and will setup to automatically reload if any of the source files are changed.

### Impersonating Users

There are three example users loaded into the system. You can impersonate them by visiting the following URLs in your browser:

- http://getRANTR.io:9000/api/customers/1 Will impersonate Todd's default account
- http://getRANTR.io:9000/api/customers/2 Will impersonate the Keystone user account
- http://getRANTR.io:9000/api/customers/3 Will impersonate Todd's alt account

You'll need to pick one of these users when you first get started.

Happy Ranting!
