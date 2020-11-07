import { ApiType, BBox, CRS_EPSG4326, MimeTypes, WmsLayer } from '@sentinel-hub/sentinelhub-js';
import express from 'express';
import { writeFile } from 'fs';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    getMap();
    res.send('Hello test');
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

async function getMap() {
    const layer = new WmsLayer({
        baseUrl: `https://services.sentinel-hub.com/ogc/wms/bc4778b9-1337-4bec-b5c7-c1ac6511e882`,
        layerId: 'NDVI'
    });

    const bbox = new BBox(CRS_EPSG4326, 18, 20, 20, 22);
    const blob = await layer.getMap({
        bbox: bbox,
        fromTime: new Date(Date.UTC(2018, 11 - 1, 22, 0, 0, 0)),
        toTime: new Date(Date.UTC(2018, 12 - 1, 22, 23, 59, 59)),
        width: 512,
        height: 512,
        format: MimeTypes.JPEG,
    }, ApiType.WMS);
    console.log(Buffer.from(blob));
    writeFile('./test.jpg', Buffer.from(blob) , console.error);
}
