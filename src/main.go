package main

import (
	"fmt"
	"net/http"
)

func startHttp(port string) {
	fmt.Printf("Start http port: %s\n", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println(err)
	}
}

func startHttps(port, cert, key string) {
	fmt.Printf("Start http port: %s\n", port)
	err := http.ListenAndServeTLS(port, cert, key, nil)
	if err != nil {
		fmt.Println(err)
	}
}

func main() {
	fmt.Println("Starting...")

	// 1. 定义一个url前缀
	staticUrl := "/static/"

	// 2. 定义一个fileserver
	fs := http.FileServer(http.Dir("./static"))

	// 3. 绑定url和fileserver
	// http://www.str2num.com/static/screen_share.html
	// ./static/static/screen_share.html
	http.Handle(staticUrl, http.StripPrefix(staticUrl, fs))

	// 4. 启动http server
	go startHttp(":8080")

	// 5. 启动https server
	startHttps(":8081", "./conf/fullchain.pem", "./conf/privkey.pem")
}
