import Singleton from "./program"

const example = Singleton.getInstance()

example.addUrl("http://google.com")
example.addUrl("http://google.com")
example.addUrl("http://google.com")
example.addUrl("http://stackoverflow.com")
example.addUrl("http://stackoverflow.com")
console.log("----------------------------------------------")
example.print()
console.log("----------------------------------------------")
example.clearHistory()
console.log("----------------------------------------------")
example.print()