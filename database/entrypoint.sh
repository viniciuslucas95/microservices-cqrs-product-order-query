#!/bin/bash
export PGPASSWORD='rep_admin'

pg_ctl stop -D /var/lib/postgresql/data -m fast

until psql -h postgres-product-order-command -U rep_admin -d dev -c "SELECT 1" >/dev/null 2>&1; do
  echo "Waiting for the primary database to be ready..."
  sleep 1
done

rm -rf /var/lib/postgresql/data 2>/dev/null

pg_basebackup -D /var/lib/postgresql/data -h postgres-product-order-command -X stream -c fast -U rep_admin -W

cp /docker-entrypoint-initdb.d/pg_hba.conf /var/lib/postgresql/data/
cp /docker-entrypoint-initdb.d/postgresql.conf /var/lib/postgresql/data/
cp /docker-entrypoint-initdb.d/standby.signal /var/lib/postgresql/data/

/usr/local/bin/docker-entrypoint.sh postgres
