package com.example.cs4550summermicaseverjava.models;

public class ReviewId {
    private long userId;
    private long sectionId;
    public int hashCode() {
        return (int)(userId + sectionId);
    }

    public boolean equals(Object object) {
        if (object instanceof ReviewId) {
            ReviewId otherId = (ReviewId) object;
            return (otherId.userId == this.userId) && (otherId.sectionId == this.sectionId);
        }
        return false;
    }
}