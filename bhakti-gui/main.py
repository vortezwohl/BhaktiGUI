import webview

index_path = "../bhakti_gui_resource/static/html/index.html"

if __name__ == "__main__":
    window = webview.create_window('Bhakti GUI', url=index_path,  width=1024, height=768, min_size=(800, 600))
    webview.start()
