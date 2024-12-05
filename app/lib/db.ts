import { Connection, Request } from "tedious";

const config = {
    server: process.env.DB_SERVER || "",
    authentication: {
      type: "default" as const,
      options: {
        userName: process.env.DB_USER || "",
        password: process.env.DB_PASSWORD || "",
      },
    },
    options: {
      database: process.env.DB_NAME || "",
      encrypt: true,
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const executeQuery = (query: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);
    connection.on('connect', (err) => {
      if (err) {
        reject(err);
        return;
      }
      console.log("Connected");
      const request = new Request(query, (err, rowCount) => {
        if (err) {
          reject(err);
        } else {
          console.log(`${rowCount} rows returned`);
        }
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results: any[] = [];
      request.on('row', (columns) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const row: any = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        columns.forEach((column: { metadata: { colName: string | number; }; value: any; }) => {
          row[column.metadata.colName] = column.value;
        });
        results.push(row);
      });

      request.on('requestCompleted', () => {
        connection.close();
        resolve(results);
      });

      connection.execSql(request);
    });

    connection.connect();
  });
};