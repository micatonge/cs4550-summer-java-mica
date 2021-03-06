
    package com.example.cs4550summermicaseverjava.services;

    import com.example.cs4550summermicaseverjava.models.Topic;
    import com.example.cs4550summermicaseverjava.models.Widget;
    import com.example.cs4550summermicaseverjava.repositories.TopicRepository;
    import com.example.cs4550summermicaseverjava.repositories.WidgetRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;
    
    import java.util.ArrayList;
    import java.util.List;
    
    @Service
    public class WidgetService {
    
        @Autowired
        TopicRepository topicRepository;
    
        @Autowired
        WidgetRepository repository;
    
        List<Widget> widgets = new ArrayList<Widget>();
        {
            widgets.add(new Widget(123, "Widget 1", "HEADING", 1, "a", "b", 5, 1, 2, "a", "b", "c"));
            widgets.add(new Widget(234, "Widget 2", "PARAGRAPH", 2, "a", "b", 5, 1, 2, "a", "b", "c"));
            widgets.add(new Widget(345, "Widget 3", "YOUTUBE", 3, "a", "b", 5, 1, 2, "a", "b", "c"));
            widgets.add(new Widget(432, "Widget 4", "IMAGE", 4, "a", "b", 5, 1, 2, "a", "b", "c"));
            widgets.add(new Widget(567, "Widget 5", "PARAGRAPH", 4, "a", "b", 5, 1, 2, "a", "b", "c"));
        }
        public List<Widget> findWidgetsForTopic(Integer tid) {
            return repository.findWidgetsForTopic(tid);
    //        return (List<Widget>)repository.findAll();
    //        List<Widget> result = new ArrayList<Widget>();
    //
    //        for (Widget w: widgets) {
    //            if(w.getTopicId().equals(tid)) {
    //                result.add(w);
    //            }
    //        }
    //
    //        return result;
        }
        public Widget findWidgetById(Integer wid) {
            for (Widget w: widgets) {
                if(w.getId().equals(wid)) {
                    return w;
                }
            }
            return null;
        }
    
        public List<Widget> findAllWidgets() {
            return widgets;
        }
    
        public List<Widget> deleteWidget(Integer wid) {
            repository.deleteById(wid);
            List<Widget> result = new ArrayList<Widget>();
            return result;
    //        List<Widget> result = new ArrayList<Widget>();
    //        for (Widget w: widgets) {
    //            if(!w.getId().equals(wid)) {
    //                result.add(w);
    //            }
    //        }
    //        this.widgets = result;
    //        return result;
        }
    
        public Widget createWidget(Integer tid, Widget newWidget) {
            Topic topic = topicRepository.findTopicById(tid);
            newWidget.setTopic(topic);
            return repository.save(newWidget);
    //        newWidget.setId(widgets.size() * 20);
    //        this.widgets.add(newWidget);
    //        return newWidget;
        }
    
        public Widget updateWidget(Integer widgetId, Widget updatedWidget) {
            Widget widget = repository.findWidgetById(widgetId);
            widget.setType(updatedWidget.getType());
            repository.save(widget);
            return widget;
    //        for(int i=0; i<widgets.size(); i++) {
    //            if(widgets.get(i).getId().equals(widgetId)) {
    //                updatedWidget.setId(widgetId);
    //                widgets.set(i, updatedWidget);
    //                return updatedWidget;
    //            }
    //        }
    //        return null;
        }
    }