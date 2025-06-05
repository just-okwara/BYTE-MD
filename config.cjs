const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "
{"noiseKey":{"private":{"type":"Buffer","data":"SCktlSVC9DJPIYbcqCPfmBLC30zBhQRnqOgDDPOnjmg="},"public":{"type":"Buffer","data":"zkZmXY6k3YcTy7AT/0Smq2kM2Gd9SsWdL3A5DjV4/FY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MCZlI5MtCLabgzNW0VPqoZ+oEwnxpwYEuVmk6INdW2o="},"public":{"type":"Buffer","data":"azqJNzo9S28fHHK4TJg3cHNJEAIYdr6J5EU4FwtfkQI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aHeES4w8CeCAsky0LmSIC6HuzkpAg1Qy06ZGsGEOjGU="},"public":{"type":"Buffer","data":"hT9pHjOaxOcqGBrtCbr5q+1VZs1L8mvQ1EC75nePxzE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"EAWx6momTIZWOulGLngdf7AjJQoUJ5qOSpNdmeb2IGE="},"public":{"type":"Buffer","data":"BnsI///V/uX7UPrc6BmQDfRH7B5TklqhVjkGOzy4BC8="}},"signature":{"type":"Buffer","data":"7U1Ki3qwkJAb4mGK/6XrqWvxS8wMVVPQKmBJjo7nfAaJDY2kt2JBrb6XOLyjpT5IDeFzDrOsl+Fa53DrMTjZCQ=="},"keyId":1},"registrationId":212,"advSecretKey":"cdJFE1Eamzeb3ZRnafT0Um9ERYxq7NTTnak95iz46lE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"CYRILDEV","me":{"id":"254108470534:3@s.whatsapp.net","lid":"190512485122089:3@lid"},"account":{"details":"CPiYlysQwdmGwgYYASAAKAA=","accountSignatureKey":"wR49uFSOoHsrvtzEwf5qz2YIt3jOeDQSQPswsbVIpG8=","accountSignature":"lL83Q/5U0WhodBlbC8a9M/Ka9A2MrG2ub+iUGWhAFAfP5q3sCPl0p8wgBLpV/DZqkv7Ekyu9hemghw/45e3zBQ==","deviceSignature":"XLTVLLIE50qP1yTs2T4dAGd2qBStYfFsL0lqqnPn/VkLZNbaOi75y8Q1AD/9mtqmXLC4ThCwjD/Q9YbvmDB9Dg=="},"signalIdentities":[{"identifier":{"name":"254108470534:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcEePbhUjqB7K77cxMH+as9mCLd4zng0EkD7MLG1SKRv"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIICA=="},"lastAccountSyncTimestamp":1749134537,"lastPropHash":"PWk5B"}
                        ": process.env.SESSION_ID || "",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
