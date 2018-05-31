#! /bin/bash -e

TEMP_FILE=$(mktemp)
cat - > $TEMP_FILE
chmod a+r $TEMP_FILE
echo $TEMP_FILE
export NEO4J_USERNAME='neo4j'
export NEO4J_PASSWORD='neoneo'
QUERY="
CREATE CONSTRAINT ON (p:Person) ASSERT p.phone_number IS UNIQUE;
USING PERIODIC COMMIT
LOAD CSV FROM 'file:$TEMP_FILE' AS row
MERGE (a:Person { phone_number: row[0]})
MERGE (b:Person { phone_number: row[1]})
MERGE (a)-[:PHONED]->(b);"
echo $QUERY
echo $QUERY | cypher-shell -a neo4j
# FIXME: Won't clear up in case of error
rm $TEMP_FILE
