#!/bin/bash -e

source .env
psql $DATABASE_URL -f database/schema.sql -f database/data.sql
