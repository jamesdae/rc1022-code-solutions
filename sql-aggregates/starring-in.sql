select "g"."name" as "genre",
       count("g".*) as "total"
  from "genres" as "g"
  join "filmGenre" using ("genreId")
  join "films" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
 where "actors"."firstName" = 'Lisa'
   and "actors"."lastName" = 'Monroe'
group by "genre";
