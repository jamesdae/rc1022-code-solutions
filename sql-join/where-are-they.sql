select "line1",
       "cities"."name" as "city",
       "district",
       "countries"."name" as "country"
  from "customers"
  join "addresses" using ("addressId")
  join "cities" using ("cityId")
  join "countries" using ("countryId")
 where "customerId" = 237
   or  "customerId" = 592
   or  "customerId" = 116
   or  "customerId" = 195
   or  "customerId" = 305
   or  "customerId" = 591
   or  "customerId" = 362
   or  "customerId" = 204
   or  "customerId" = 196
   or  "customerId" = 13;
