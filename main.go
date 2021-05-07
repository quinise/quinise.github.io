package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Static("/assets", "./assets")
	router.LoadHTMLGlob("templates/*")

	router.GET("/", func(c *gin.Context) {
		fmt.Println("in index")

		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Quinise Mayes",
		})
	})

	// Listen and server on 0.0.0.0:8080
	router.Run(":8080")
}
