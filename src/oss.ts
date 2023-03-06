import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

interface IOptions {
    access_key_id: string;
    access_key_secret: string;
    endpoint: string;
    security_token: string;
    object_name: string;
    bucket_name: string;
    region: string;
}

export default class Oss {
    client;
    options;
    constructor(options: IOptions) {
        this.options = options;
        this.client = this.initS3Client();
    }
    initS3Client() {
        const { access_key_id, region, access_key_secret, endpoint, security_token } = this.options;
        const client = new S3Client({
            endpoint,
            region,
            forcePathStyle: false,
            tls: true,
            credentials: {
                accessKeyId: access_key_id,
                secretAccessKey: access_key_secret,
                sessionToken: security_token,
            },
        });
        return client;
    }

    async upload(file: File) {
        const { bucket_name, object_name } = this.options;
        const command = new PutObjectCommand({
            Body: file,
            Bucket: bucket_name,
            Key: object_name,
            ContentType: file.type,
        });
        const response = await this.client.send(command);
        return response;
    }
}
