function writeValue(val : string, ...extraInfo : string[]) {
  console.log(`Value : ${val}, Extras : ${extraInfo}`)
}
writeValue("Londres", "Pluie", "Froid") ;
writeValue("Paris", "Ensoleillé") ;
writeValue("New York") ;
