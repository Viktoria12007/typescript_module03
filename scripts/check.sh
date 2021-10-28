#!/bin/bash

if command -v node &> /dev/null
then
    echo "✅ Node.js установлен."
else
    echo "⚠️ Node.js не установлен: воспользуйтесь инструкцией по установке https://github.com/nvm-sh/nvm"
    exit
fi

if [ -d "./node_modules" ]
then
    echo "✅ Зависимости установлены."
else
    echo "⚠️ Зависимости не установлены, выполните следующую команду: npm ci"
    exit 1
fi

echo "👏 Вы правильно подготовили репозиторий к работе, можете приступать к решению домашних заданий!"
