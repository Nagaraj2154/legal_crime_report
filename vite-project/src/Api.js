import { CloudantV1 } from '@ibm-cloud/cloudant';
import { IamAuthenticator } from 'ibm-cloud-sdk-core';

const cloudant = CloudantV1.newInstance({
  authenticator: new IamAuthenticator({
    apikey: 'f0RUugbvJJP1VXzwK4y5fV9WtHmjlaw5XTZRrcj6cKaM',
  }),
  serviceUrl: 'https://f297abe0-76c5-4d75-a58a-57c43e5b6588-bluemix.cloudantnosqldb.appdomain.cloud',
});

const dbName = 'cloudant-a0';

async function insertDocument(doc) {
  try {
    const response = await cloudant.postDocument({
      db: dbName,
      document: doc,
    });
    console.log('Inserted document ID:', response.result.id);
  } catch (err) {
    console.error('Insert error:', err);
  }
}

async function getAllDocuments() {
  try {
    const response = await cloudant.postAllDocs({
      db: dbName,
      includeDocs: true,
    });
    const documents = response.result.rows.map(row => row.doc);
    console.log('All documents:', documents);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

(async () => {
  await insertDocument({ name: "Sai", role: "Student" });
  await getAllDocuments();
})();
