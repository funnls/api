import { Injectable, Logger } from '@nestjs/common';
import * as shelljs from 'shelljs';
import FetchRequestDto from './fetch_request.dto';

@Injectable()
export default class FetchService {
  private readonly logger = new Logger(FetchService.name);

  /*
   * Promisify shelljs
   * https://gist.github.com/davidrleonard/2962a3c40497d93c422d1269bcd38c8f
   */
  static shellAsync(cmd: string): Promise<string> {
    return new Promise((resolve, reject) => {
      shelljs.exec(cmd, { silent: true }, (code, stdout, stderr) => {
        console.log({ code });
        if (code !== 0) {
          return reject(new Error(stderr));
        }
        return resolve('this failed');
      });
    });
  }

  getHello(): string {
    return 'Hello World from fetch!';
  }

  async fetchUrl({ url }: FetchRequestDto): Promise<string> {
    const COMMAND = 'youtube-dl';
    const OPTIONS = '-v -x --audio-format mp3 --audio-quality 0';

    try {
      const res = await FetchService.shellAsync(`${COMMAND} ${OPTIONS} ${url}`);
    } catch (e) {
      this.logger.log('hey sailor');
    }
    return `I'm fetching ${url}!`;
  }
}
