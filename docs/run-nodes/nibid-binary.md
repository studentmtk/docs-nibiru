# ⚙️ Building the Nibiru Binary

Instructions on building and installing the `nibid` binary. `nibid` is a command line client for the Nibiru network. Nibiru users can use nibid to send transactions to the Nibiru network and query the blockchain data.{synopsis}


- [⚙️ Building the Nibiru Binary](#️-building-the-nibiru-binary)
  - [Install Go](#install-go)
  - [Install make and gcc](#install-make-and-gcc)
  - [Build and install the Nibiru binary](#build-and-install-the-nibiru-binary)
  - [Local development](#local-development)
    - [Note: Docker Engine](#note-docker-engine)
  - [Next Steps](#next-steps)

## Install Go

The installation process for Go depends on your OS. Nibiru is meant to build with a Unix system such as MacOS, Ubuntu, or WSL. Please install Go v1.18 using the instructions at [go.dev/doc/install](https://go.dev/doc/install). For Ubuntu, you can use:

```bash
wget https://golang.org/dl/go1.18.2.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz
```

You'll also want to set the following environment variables in your shell config (e.g. `.bashrc`, `.zshrc`).

```bash
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
```

## Install make and gcc

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt install git build-essential ufw curl jq snapd --yes
```

## Build and install the Nibiru binary

Begin by cloning the `nibiru` repo.

```bash
cd $HOME
git clone https://github.com/NibiruChain/nibiru
cd nibiru
git checkout v0.15.0
make install
```

Running these commands should have made `nibid` available in your `$PATH`. You should now be able to view a list of all available commands with

```bash
nibid [command]
```

::: tip
If the "`nibid: command not found`" error message is returned, confirm that the Golang binary path is correctly configured by running the following command (or setting it in your shell config):
```bash
export PATH=$PATH:$(go env GOPATH)/bin
```
:::

---

## Local development

Lastly, you can run the chain for local development with `make localnet`. After opening another terminal, you'll be able to use the full suite of `nibid` commands.

### Note: Docker Engine

You'll need Docker to run commands that use external containers like `make proto-gen`. Instructions for installing Docker can be found [here](https://docs.docker.com/engine/install/).

---

## Next Steps

#### Learn more about the [`nibid` Command-Line Interface][page-cli]
#### [Setup Cosmovisor][page-cosmovisor]

#### Run a Full Node

- [Run a Full Node on Testnet][page-testnet]
- [Setup a Validator Node][page-validator]

#### [What's a node?][page-node-daemon]

[page-cosmovisor]: ./testnet/cosmovisor
[page-testnet]: ./testnet/testnet
[page-validator]: ./validators
[page-node-daemon]: ./testnet/node-daemon
[page-cli]: ../dev/cli