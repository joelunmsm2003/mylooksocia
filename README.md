### :point_right: This starter repo has moved to the [ionic-team/starters](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/sidemenu) repo! :point_left:

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
export GRADLE_HOME=/home/andy/Escritorio/android-studio-ide-173.4819257-linux/android-studio/gradle/gradle-4.4
export PATH=$PATH:$GRADLE_HOME/bin


ionic build android --release

export JAVA_HOME='/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home'

ionic build android --release


export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore /home/andy/mylooksocia/platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name

zip -d /home/joel/myApp/platforms/android/build/outputs/apk/android-debug.apk  META-INF/\*

./zipalign -v 4 /home/joel/socia/platforms/android/build/outputs/apk/android-release-unsigned.apk ms.apk

/home/joel/Escritorio/gradle-4.2/

sudo ln -sf /home/joel/Escritorio/gradle-4.2/ /usr/bin/gradle

curl --include \
     --header "Authorization: Basic OGQyNTllMmUtMmY2Ny00ZGQxLWEzNWMtMjM5NTdlNjM0ZTc3" \
     "https://onesignal.com/api/v1/players?app_id=6d06ccb5-60c3-4a76-83d5-9363fbf6b40a&limit=300&offset=0">/home/dd.txt





jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore /home/andy/mylooksocia/platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name


./zipalign -v 4 /home/andy/mylooksocia/platforms/android/build/outputs/apk/android-release-unsigned.apk mylook55.apk


