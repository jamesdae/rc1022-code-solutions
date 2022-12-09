select "countries"."name" as "country",
       count("cities".*)
  from "countries"
  join "cities" using ("countryId")
group by "country";
