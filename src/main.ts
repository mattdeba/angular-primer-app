function writeValue(val : string | null) {
  console.log(`Value : ${val ?? "Fallback value"}`)
}
writeValue("Londres") ;
writeValue(null) ;

