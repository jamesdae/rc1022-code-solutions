select "firstName",
       "lastName",
       sum("amount") as "total"
  from "customers"
  join "payments" using ("customerId")
group by "customerId"
order by "total" desc;
